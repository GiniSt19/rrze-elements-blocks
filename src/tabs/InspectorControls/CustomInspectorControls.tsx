// Import required WordPress packages and components
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

// Import custom components
import { ColorSwitcher } from "../../components/ColorSwitcher";

// Define TypeScript interface for component props
interface EditProps {
  attributes: {
    xray?: boolean;
    color?: string;
  };
  setAttributes: (attributes: Partial<EditProps["attributes"]>) => void;
}

/**
 * CustomInspectorControls component - Adds custom inspector controls to the block editor.
 * @param {EditProps} props - React props.
 * @returns {JSX.Element} The rendered CustomInspectorControls component.
 */
const CustomInspectorControls = ({
  attributes,
  setAttributes,
}: EditProps): JSX.Element => {
  const { xray } = attributes;

  /**
   * Render method for the CustomInspectorControls component.
   * Adds X-ray and ColorSwitcher settings to the block inspector.
   */
  return (
    <>
      <InspectorControls>
        <PanelBody title={__("X-ray", "rrze-elements")} initialOpen={false}>
          <ToggleControl
            label={__(
              "Show / Hide all inactive tabs inside the editor.",
              "rrze-elements"
            )}
            checked={xray}
            onChange={(xray) => setAttributes({ xray })}
          />
        </PanelBody>
        <ColorSwitcher
          attributes={{ color: attributes.color }}
          setAttributes={setAttributes}
        />
      </InspectorControls>
    </>
  );
};

// Export the CustomInspectorControls component
export { CustomInspectorControls };
