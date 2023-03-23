import ImageInput from "./ImageInput";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";

export default function FieldsGenerator({ fields, state, path }) {
  const Fields = fields.map((item) => {
    switch (item.type) {
      case "email":
      case "number":
      case "password":
      case "file":
        return (
          <ImageInput key={item.id} item={item} state={state} path={path} />
        );
      case "text":
        return <TextInput key={item.id} item={item} state={state} />;
      case "textarea":
        return <TextAreaInput key={item.id} item={item} state={state} />;
      default:
        throw new Error(`FieldsGenerator item type "${item.type}" not valid`);
    }
  });

  return <>{Fields}</>;
}
