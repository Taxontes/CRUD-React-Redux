import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUser } from "../hooks/useUsers";

export const CreateNewUser = () => {
  const { addUser } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const nombre = formData.get("nombre") as string;
    const email = formData.get("email") as string;
    const edad = formData.get("edad") as string;
    const gitHub = formData.get("github") as string;

    addUser({ nombre, email, edad, gitHub });
    
    form.reset();
  };
  return (
    <Card style={{ marginTop: "16px" }}>
      <Title style={{ marginBottom: "16px" }}>Agregar Usuario</Title>

      <form onSubmit={handleSubmit}>
        <TextInput name="nombre" placeholder="Introduce tu nombre"></TextInput>
        <TextInput name="email" placeholder="Email"></TextInput>
        <TextInput name="edad" placeholder="Edad"></TextInput>
        <TextInput name="github" placeholder="GitHub"></TextInput>
        <div>
          <Button type="submit" style={{ marginTop: "16px" }}>
            Crear Usuario
          </Button>
        </div>
      </form>
    </Card>
  );
};
