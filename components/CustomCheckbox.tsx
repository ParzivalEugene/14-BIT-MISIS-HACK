import {
  CheckboxProps,
  Chip,
  VisuallyHidden,
  tv,
  useCheckbox,
} from "@nextui-org/react";

const checkbox = tv({
  slots: {
    base: "border-secondary bg-[#0B011B]",
    content: "text-default-500",
  },
  variants: {
    isSelected: {
      true: {
        base: "border-secondary bg-secondary hover:bg-secondary-500 hover:border-secondary-500",
        content: "text-secondary-foreground",
      },
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
      },
    },
  },
});

export const CustomCheckbox = (props: CheckboxProps) => {
  const {
    children,
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    ...props,
  });

  const styles = checkbox({ isSelected, isFocusVisible });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color="secondary"
        variant="faded"
        {...getLabelProps()}
      >
        {children ? children : isSelected ? "Enabled" : "Disabled"}
      </Chip>
    </label>
  );
};
