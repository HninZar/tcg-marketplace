import { extendTheme } from "@chakra-ui/react"
import { inherits } from "util"


const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "'Poppins', sans-serif",
        background: "#F8F8F8",
        height: '100%'
     },
     button: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: "inherit",
      fontSize: "inherit",
     }
    },
  },

})
  
export default theme
