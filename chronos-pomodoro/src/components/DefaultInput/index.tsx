type DefaultInputProps = {
  //this forces that id must be added as string
  id: string;
  //the question mark makes it optional
  labelText?: string;
  //and the next property, which is "type", can be of any valid input type, like button
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  //anything inside the input tag and is a valid input type will be sent, like title
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}

      <input id={id} type={type} {...rest} />
    </>
  );
}
