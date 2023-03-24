import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";
import ImageInput from "./ImageInput";
import UrlInput from "./UrlInput";
import RadioInput from "./RadioInput";

export default function FieldsGenerator({ fields, state, path, options }) {
  const Fields = fields.map((item) => {
    switch (item.type) {
      case "email":
      case "number":
      case "password":
      case "url":
        return <UrlInput key={item.id} item={item} state={state} />;
      case "text":
        return <TextInput key={item.id} item={item} state={state} />;
      case "textarea":
        return <TextAreaInput key={item.id} item={item} state={state} />;
      case "file":
        return <ImageInput key={item.id} item={item} state={state} />;
      // case "radio":
      //   return (
      //     <RadioInput
      //       key={item.id}
      //       item={item}
      //       state={state}
      //       path={path}
      //       options={options}
      //     />
      //   );
      default:
        throw new Error(`FieldsGenerator item type "${item.type}" not valid`);
    }
  });

  return <>{Fields}</>;
}
