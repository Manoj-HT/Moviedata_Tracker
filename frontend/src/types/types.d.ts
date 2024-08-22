import {
  CSSProperties,
  ReactNode,
  SyntheticEvent,
  Dispatch,
  SetStateAction,
} from "react";

// general purpose
type ChildrenTypeProps = {
  children: ReactNode;
};

//components
type UseStateType = {
  data: object | null;
  setData: Dispatch<SetStateAction<object | null>>;
};

// animation
type KeyFrameType = CSSProperties & Keyframe;
type AnimationOptionTypes = {
  cssEffects: KeyFrameType[];
  timingOptions: KeyframeAnimationOptions;
};

// form
type InitialFormType = {
  [key: string]: [initialValue: any, ...Validator[]];
};
type FormControlType = {
  value: any;
  validators: Validator[];
  touched: boolean;
  error: boolean;
  name: string;
  valid: boolean;
};
type FormControlObjectType = {
  [key: string]: FormControlType;
};
type ReturnTypeValidator = (...params: any) => (value: any) => boolean;
type ReferenceTypeValidator = (value: any) => boolean;
type Validator = ReturnTypeValidator | ReferenceTypeValidator;
type InputProps = {
  name: string;
  id: string;
  placeholder?: string;
  error?: boolean;
  inputFn?: (e: SyntheticEvent) => void;
  changeFn?: (e: SyntheticEvent) => void;
  style?: CSSProperties
};
type TextInputProps = InputProps & {};
type EmailInputProps = InputProps & {};
type PasswordInputProps = InputProps & {};

//config
type ConfigType = {
  baseApi: string;
};

//styles
type StyleMap<ComponentStyleNames extends string> = {
  [name in ComponentStyleNames]: CSSProperties;
};
