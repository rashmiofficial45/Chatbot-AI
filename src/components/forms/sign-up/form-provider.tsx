import { AuthContextProvider } from '@/context/use-auth-context'
import React from 'react'

type Props = {}

const SignUpFormProvider = (props: Props) => {
  return (
    <div>
        <AuthContextProvider>
            <div>
                {/* <FormProvider>

                </FormProvider> */}
            </div>
        </AuthContextProvider>

    </div>
  )
}

export default SignUpFormProvider