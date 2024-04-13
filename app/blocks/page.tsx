import React from "react"

import Box from "@/components/Box"

import { LoginForm } from "./Authentication01"
import { LoginForm2 } from "./Authentication02"

const BlocksPage = () => {
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:p-8">
      <Box title="Authentication-01" contentClassName="flex justify-center">
        <LoginForm />
      </Box>
      <Box title="Authentication-02" desc="login with google ">
        <LoginForm2 />
      </Box>
    </div>
  )
}

export default BlocksPage
