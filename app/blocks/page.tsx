import React from "react"

import { TooltipProvider } from "@/components/ui/tooltip"
import Box from "@/components/Box"

import { LoginForm } from "./Authentication01"
import { LoginForm2 } from "./Authentication02"
import { LoginForm3 } from "./Authentication03"
import { LoginForm4 } from "./Authentication04"
import { Dashboard01 } from "./Dashboard01"
import { Dashboard02 } from "./Dashboard02"
import { Dashboard03 } from "./Dashboard03"
import { Dashboard04 } from "./Dashboard04"
import { Dashboard05 } from "./Dashboard05"

const BlocksPage = () => {
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:p-8">
      <Box title="Authentication-01" contentClassName="flex justify-center">
        <LoginForm />
      </Box>
      <Box title="Authentication-02" desc="login with google ">
        <LoginForm2 />
      </Box>
      <Box title="Authentication-03" desc="with first name and last name ">
        <LoginForm3 />
      </Box>
      <Box title="Authentication-04" desc="with image">
        <LoginForm4 />
      </Box>
      <Box title="Dashboard-01" hasContentBorder>
        <Dashboard01 />
      </Box>
      <Box title="Dashboard-02" hasContentBorder desc="">
        <Dashboard02 />
      </Box>
      <TooltipProvider>
        <Box title="Dashboard-03" hasContentBorder desc="">
          <Dashboard03 />
        </Box>
      </TooltipProvider>
      <Box title="Dashboard-04" hasContentBorder desc="">
        <Dashboard04 />
      </Box>
      <TooltipProvider>
        <Box title="Dashboard-05" hasContentBorder desc="">
          <Dashboard05 />
        </Box>
      </TooltipProvider>
    </div>
  )
}

export default BlocksPage
