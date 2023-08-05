import { Select } from "@chakra-ui/react";

export const SearchForm_Set = () => {
    return(
        <Select placeholder='Set' 
          color="#bcbbbb" 
          backgroundColor="white" 
          borderRadius="0px" 
          borderRightRadius="50px"
        >
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
      </Select>
    );
}