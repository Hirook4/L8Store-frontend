"use client";

import { register } from "@/actions/register";
import { useAuthStore } from "@/store/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useState, useTransition } from "react";
import z from "zod";

const schema = z
  .object({
    name: z.string().min(2, { message: "name is too short" }),
    email: z.email({ message: "invalid email address" }),
    password: z.string().min(6, { message: "password too short" }),
    confirmPassword: z.string().min(6, { message: "password too short" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });

type ErrorStructure = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  formError?: string;
};

export const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<ErrorStructure>({});
  const [pending, startTransition] = useTransition();
  const authStore = useAuthStore((state) => state);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
    setErrors((errors) => ({
      ...errors,
      [e.target.name]: undefined,
      form: undefined,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: any = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    startTransition(async () => {
      const res = await register(form);
      if (res.error) {
        setErrors({ formError: res.error });
      } else {
        redirect("/login");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" border border-neutral-300 p-8 rounded-sm"
    >
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <div className="mb-4">
        <label className="mb-1">Name</label>
        <input
          name="name"
          autoFocus
          type="text"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-neutral-300 rounded-sm px-3 py-2"
          disabled={pending}
        />
        {errors.name && (
          <div className="text-red-500 text-sm mt-1">{errors.name}</div>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-1">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-neutral-300 rounded-sm px-3 py-2"
          disabled={pending}
        />
        {errors.email && (
          <div className="text-red-500 text-sm mt-1">{errors.email}</div>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-1">Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className="w-full border border-neutral-300 rounded-sm px-3 py-2"
          disabled={pending}
        />
        {errors.password && (
          <div className="text-red-500 text-sm mt-1">{errors.password}</div>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-1">Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full border border-neutral-300 rounded-sm px-3 py-2"
          disabled={pending}
        />
        {errors.confirmPassword && (
          <div className="text-red-500 text-sm mt-1">
            {errors.confirmPassword}
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-2 rounded-sm"
        disabled={pending}
      >
        {pending ? "Registering..." : "Register"}
      </button>
      {errors.formError && (
        <div className="text-red-500 text-sm mt-1">{errors.formError}</div>
      )}
      <div className="text-center mt-4">
        <Link href="/login" className="text-sm text-neutral-500 mt-2 block">
          already have an account? log in!
        </Link>
      </div>
    </form>
  );
};
