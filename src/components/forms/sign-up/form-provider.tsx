import { AuthContextProvider } from "@/context/use-auth-context";
import { useSignUpForm } from "@/hooks/use-sign-up";
import React from "react";
import { FormProvider } from "react-hook-form";

type Props = {};

const SignUpFormProvider = (props: Props) => {
  const { methods, onHandleSubmit, loading } = useSignUpForm();
  return (
    <div>
      <AuthContextProvider>
        <div>
          <FormProvider {...methods}>
            
          </FormProvider>
        </div>
      </AuthContextProvider>
    </div>
  );
};

export default SignUpFormProvider;
