import { RefObject } from "react"

export type SelectProps = {
  selectLabel: string
  selectName: string
  required?: boolean
  inputRef: RefObject<HTMLSelectElement>
};
