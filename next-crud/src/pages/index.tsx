import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/bd/ColecaoCliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useClientes from "../hooks/useClientes"

export default function Home() {

  const {cliente, clientes, tabelaVisivel, exibirTabela, clienteSelecionado, clienteExcluido, novoCliente, salvarCliente} = useClientes()

  return (
    <div className={`flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600 text-white`}>
      <Layout titulo="Cadastro Simples">
        { tabelaVisivel ? (
          <>
            <div className={`flex justify-end`}>
              <Botao cor="green" className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido} />
          </>
        ) : (
          <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={exibirTabela}></Formulario>
        )}
      </Layout>
    </div>
  )
}
