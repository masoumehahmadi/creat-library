"use client";
import React from "react";
import styles from "./HomePage.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "./../../node_modules/hometask/dist/Button";
type FormData = {
  variant: "primary" | "secondary" | "outline" | "danger";
  size: "sm" | "md" | "lg";
  children: string;
};

export default function HomePage() {
  const validationSchema = Yup.object().shape({
    variant: Yup.string()
      .oneOf(["primary", "secondary", "outline", "danger"])
      .required("Please select a variant"),
    size: Yup.string()
      .oneOf(["sm", "md", "lg"])
      .required("Please select a size"),
    children: Yup.string().required("Please enter button text"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      variant: undefined,
      size: undefined,
      children: "",
    },
  });

  const [buttonProps, setButtonProps] = useState<{
    variant: "primary" | "secondary" | "outline" | "danger";
    size: "sm" | "md" | "lg";
    children: string;
  } | null>(null);

  const onSubmit = (data: FormData) => {
    setButtonProps({
      variant: data.variant as "primary" | "secondary" | "outline" | "danger",
      size: data.size as "sm" | "md" | "lg",
      children: data.children,
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>
            You can define a button that corresponds to the values below and see
            the result.
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.formStyle}>
            <div className={styles.option}>
              <label className={styles.lableStyle} htmlFor="variant">
                Variant :
              </label>
              <select
                className={styles.select}
                id="variant"
                {...register("variant")}
              >
                <option value="">Please add a variant</option>
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="outline">outline</option>
                <option value="danger">danger</option>
              </select>
              {errors.variant && (
                <p className={styles.errTxt}>{errors.variant.message}</p>
              )}
            </div>
            <div className={styles.option}>
              <label className={styles.lableStyle} htmlFor="size">
                Size :
              </label>
              <select className={styles.select} id="size" {...register("size")}>
                <option value="">Please add a size</option>
                <option value="sm">sm</option>
                <option value="md">md</option>
                <option value="lg">lg</option>
              </select>
              {errors.size && (
                <p className={styles.errTxt}>{errors.size.message}</p>
              )}
            </div>
            <div>
              <label className={styles.lableStyle} htmlFor="children">
                Button text:
              </label>
              <input
                className={styles.inputStyle}
                {...register("children")}
                id="children"
                type="text"
                placeholder="Enter your Button text"
              />
              {errors.children && (
                <p className={styles.errTxt}>{errors.children.message}</p>
              )}
            </div>
            <Button variant="secondary" size="lg">
              submit
            </Button>
            {buttonProps && (
              <div className={styles.result}>
                <h3>Button Result:</h3>
                <Button variant={buttonProps.variant} size={buttonProps.size}>
                  {buttonProps.children}
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
