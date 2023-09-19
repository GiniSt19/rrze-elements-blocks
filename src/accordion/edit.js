import {
  TextControl,
  ColorPalette,
  PanelBody,
  ToolbarDropdownMenu,
  Toolbar,
  ToolbarGroup,
} from "@wordpress/components";
import {
  useBlockProps,
  BlockControls,
  InnerBlocks,
  InspectorControls,
} from "@wordpress/block-editor";
import { useState, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { withSelect, useDispatch, useSelect } from "@wordpress/data";

export default function Edit({ attributes, context, setAttributes, clientId }) {
  const props = useBlockProps();
  const [isActive, setIsActive] = useState(false);
  const { sameBlockCount, title, color } = attributes;

  const colorToSlugMap = {
      "#04316A": "",
      "#C50F3C": "rw",
      "#7bb725": "nat",
      "#18B4F1": "med",
      "#FDB735": "phil",
      "#8C9FB1": "tech",
  };

  const onChangeColor = (newColor) => {
      setAttributes({ color: colorToSlugMap[newColor] });
  };

  const toggleActive = () => {
      setIsActive(!isActive);
  };

  const onChangeTitle = (newText) => {
      if (newText === "") {
          setAttributes({ title: " " });
      } else {
          setAttributes({ title: newText });
      }
  };

  const {
    selectedBlock,
    blockParents,
    siblingBlocks,
    totalChildrenCount,
  } = useSelect(
    (select) => {
      const { getBlock, getBlockParents, getBlocks } = select("core/block-editor");
      const blockParents = getBlockParents(clientId, true);
      const parentClientId = blockParents[0];
      const siblingBlocks = getBlocks(parentClientId);
      const collapsiblesBeforeMe = getBlock(parentClientId)?.attributes?.previousBlockIds || [];
  
      let totalChildrenCount = 0;
      collapsiblesBeforeMe.forEach((blockClientId) => {
        const childrenCount = getBlock(blockClientId)?.attributes?.childrenCount || 0;
        totalChildrenCount += childrenCount;
      });
  
      return {
        selectedBlock: getBlock(clientId),
        blockParents,
        siblingBlocks,
        totalChildrenCount,
      };
    },
    [clientId] // only rerun if clientId changes
  );

  useEffect(() => {
    setAttributes({ancestorCount:  context['rrze-elements/collapseSBlockCount'] + context['rrze-elements/collapseTotalChildrenCount'] +1})
  }, [context['rrze-elements/collapseSBlockCount'], context['rrze-elements/collapseTotalChildrenCount']]);

  let sameTypeSiblingsBefore = 0;
  useEffect(() => {
      if (selectedBlock && blockParents.length > 0) {
          for (const block of siblingBlocks) {
              if (block.clientId === selectedBlock.clientId) {
                  break;
              }
              if (block.name === selectedBlock.name) {
                  if(block?.innerBlocks?.forEach((innerBlock) => {
                      if (innerBlock.name === "rrze-elements/accordions") {
                        sameTypeSiblingsBefore = sameTypeSiblingsBefore + innerBlock?.innerBlocks.length;
                      }}));
                  sameTypeSiblingsBefore++;
              }
          }
          if (sameTypeSiblingsBefore !== attributes.sameBlockCount) {
              setAttributes({ sameBlockCount: sameTypeSiblingsBefore });
          }
      }
  }, [
      selectedBlock,
      blockParents,
      siblingBlocks,
      attributes.sameBlockCount,
      setAttributes,
  ]);

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Settings", "text-box")}>
          <ColorPalette
            colors={[
              { name: "Zentrale Institution", color: "#04316A", slug: "" },
              {
                name: "Rechts- und Wirtschafts­wissenschaftliche Fakultät",
                color: "#C50F3C",
              },
              { name: "Naturwissenschaftliche Fakultät", color: "#7bb725" },
              { name: "Medizinische Fakultät", color: "#18B4F1" },
              {
                name: "Philosophische Fakultät und Fachbereich Theologie",
                color: "#FDB735",
              },
              { name: "Technische Fakultät", color: "#8C9FB1" },
            ]}
            value={Object.keys(colorToSlugMap).find(
              (key) => colorToSlugMap[key] === color
            )}
            onChange={onChangeColor}
          />
        </PanelBody>
      </InspectorControls>

      <div {...props}>
        <div className={`accordion-group ${color}`}>
          <h2 className="accordion-heading" onClick={toggleActive}>
            <span className="read-mode-only">{title}</span>
            <TextControl
              className={`accordion-toggle ${isActive ? "active" : ""}`}
              onChange={onChangeTitle}
              value={title}
              placeholder={__("Your Text", "text-box")}
            />
          </h2>
          <div
            className={`accordion-body ${isActive ? "active" : ""}`}
          >
            <div className="accordion-inner clearfix">
            <InnerBlocks allowedBlocks={[
                "rrze/rrze-video",
                "core/paragraph",
                "core/heading",
                "core/list",
                "core/image",
                "core/quote",
                "core/file",
                "core/video",
                "core/audio",
                "core/cover",
                "core/table",
                "core/freeform",
                "core/html",
                "core/preformatted",
                "core/pullquote",
                "core/verse",
                "core/code",
                "core/columns",
                "core/column",
                "core/more",
                "core/nextpage",
                "core/separator",
                "core/spacer",
                "core/shortcode",
                "core/archives",
                "core/categories",
                "core/latest-comments",
                "core/latest-posts",
                "core/calendar",
                "core/rss",
                "core/search",
                "core/tag-cloud",
              ]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}