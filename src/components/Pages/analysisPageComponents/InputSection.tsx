"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import {
  setSentimentValue,
  setConfidenceScores,
  setLoading,
  setLoadingSpeedometer,
  resetState,
} from "@/store/slice";
import { Heading } from "@/components";
import "./../analysisPage.css";
import Image from "next/image";

const textAnalysiSchema = z.object({
  text: z.string().min(10, "Write at least 10 characters to be analyzed"),
});

type FormValues = z.infer<typeof textAnalysiSchema>;

const InputSection: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(textAnalysiSchema),
  });

  const onSubmit = async (data: FormValues) => {
    dispatch(setLoading(true));
    dispatch(setLoadingSpeedometer(true));
    try {
      const response = await fetch(
        "https://azure-language-sentiment-analysis.vercel.app/analyze-sentiment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ documents: [{ id: "1", text: data.text }] }),
        }
      );
      const result = await response.json();

      // Simulate a delay to allow animations to be more noticeable
      setTimeout(() => {
        // Update state with API response
        dispatch(setSentimentValue(result[0].sentiment));
        dispatch(setConfidenceScores(result[0].confidenceScores));
        dispatch(setLoading(false));
        dispatch(setLoadingSpeedometer(false));
      }, 1000); // Adjust this delay as needed
    } catch (error) {
      console.error("Error:", error);
      dispatch(setLoading(false));
      dispatch(setLoadingSpeedometer(false));
    }
  };

  return (
    <div className="inputSection bg-blue-400 bg-opacity-10 backdrop-blur-lg border border-blue-200 border-opacity-20 rounded-lg p-3 px-6  backdrop-filter md:h-1/2">
      <Image
        src="./faces/yellowFace.svg"
        alt="blueFace"
        width={90}
        height={90}
        className="yellowFaceClass "
      />
      <Image
        src="./faces/greenFace.svg"
        alt="pinkFace"
        width={110}
        height={110}
        className="greenFaceClass "
      />

      <Heading className="text-center">Ready?</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("text")}
          placeholder="Enter your text here"
          className={`w-full h-32 p-4 rounded-lg border resize-none focus:outline-none ${
            errors.text ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.text && <p className="text-red-500">{errors.text.message}</p>}
        <button
          type="submit"
          className="mt-2 px-6 py-1 bg-blue-500 text-sm text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
        >
          Analyze
        </button>
      </form>
    </div>
  );
};

export default InputSection;
