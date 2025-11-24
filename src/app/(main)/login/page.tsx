"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "./schema/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye as farEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash as fasEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { Input } from "@/components";

export default function Page() {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  return (
    <>
      <main className="font-nunito">
        <section className="flex justify-center items-center w-full h-screen">
          <form
            onSubmit={handleSubmit((data: LoginSchemaType) => {
              console.log(data);
            })}
            className="basis-2/6 flex flex-col gap-y-3 p-4 text-gray-900 border border-gray-200"
          >
            <div className="mb-3">
              <h1 className="text-center text-xl text-gray-950 font-bold">
                Selamat Datang!
              </h1>
              <p className="-mt-1 text-center text-sm text-gray-800">
                Silakan masuk untuk melanjutkan aktivitas Anda
              </p>
            </div>
            <div>
              <Input
                label="Nama pengguna"
                id="username"
                type="text"
                {...register("username")}
                error={errors.username?.message}
              />
            </div>
            <div
              className={`${
                errors.password ? "items-center" : "items-end"
              } flex gap-x-1`}
            >
              <div className="grow">
                <Input
                  label="Kata sandi"
                  id="password"
                  type={passwordShow ? "text" : "password"}
                  {...register("password")}
                  error={errors.password?.message}
                />
              </div>
              <button
                type="button"
                onClick={() => setPasswordShow(!passwordShow)}
                className={`${
                  passwordShow
                    ? "text-gray-600 border-gray-300"
                    : "bg-gray-950 text-white border-gray-950"
                } ${
                  errors.password && "mt-1"
                } size-[38px] border rounded cursor-pointer`}
              >
                <FontAwesomeIcon icon={passwordShow ? farEye : fasEyeSlash} />
              </button>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-3 px-4 py-2 bg-gray-950 text-white font-bold cursor-pointer transition-all duration-75 active:scale-x-99 active:scale-y-96"
            >
              {isSubmitting ? "Loading..." : "Masuk"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
