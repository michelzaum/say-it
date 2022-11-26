import { RefObject } from "react"

export type SelectProps = {
  required?: boolean
  ListRef: RefObject<HTMLInputElement>
  id: string
};
