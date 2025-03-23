import { SelfDrivenTextInput } from "./TextInput";

export function SelfDrivenFormContainer() {
  console.log(`Self Driven Form Rendering`)
  return (
    <div className="container">
      <h4>'Self Driven' Input Form (NO RE-RENDERS - only children re-render on field changes)</h4>
      <SelfDrivenTextInput fieldName="first" label='First Name'/>
      <SelfDrivenTextInput fieldName="last" label='Last Name'/>
    </div>
  );
};