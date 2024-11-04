import { useBlockProps } from "@wordpress/block-editor";

interface SaveProps {
  attributes: {
    title: string;
  };
}

export default function save({ attributes }: SaveProps) {
  const blockProps = useBlockProps.save();
  return (
      <>
          <div {...blockProps}
          >
            <h2>Frontend 
              !</h2>
          </div>
      </>
  );
}
