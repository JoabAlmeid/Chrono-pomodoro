type DefaultInputProps = {
  //this forces that id must be added as string
  id: string;
  //and the next property, which is "type", can be of any valid input type, like button
} & React.ComponentProps<"input">;

export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input id={id} type={type} />
    </>
  );
}
