import { useState } from 'react'
import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from '@storage/groups/groupCreate';

export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation();

  async function handleNew() {
    try {
      await groupCreate(group);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar pessoas"
        />

        <Input 
          placeholder="Nome da galera"
          onChangeText={setGroup}
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}