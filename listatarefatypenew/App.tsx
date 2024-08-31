import React, { useState } from "react";
import { NativeBaseProvider, View } from 'native-base';
import AdicionarTarefa from "./componentes/AdicionarTarefas";
import ListaTarefas from "./componentes/ListaTarefas";

export default function App() {
  const [tarefas, setTarefas] = useState<string[]>([]);

  const adicionarTarefa = (novaTarefa: string) => {
    setTarefas([...tarefas, novaTarefa]);
  };

  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
        <AdicionarTarefa onAdicionarTarefa={adicionarTarefa} />
        <ListaTarefas tarefas={tarefas} />
      </View>
    </NativeBaseProvider>
  );
}