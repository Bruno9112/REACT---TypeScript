import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/bd/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTableOuForm from "./useTableOuForm"

export default function useClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente()
    const {tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela} = useTableOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }
    async function clienteExcluido(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        tabelaVisivel,
        exibirTabela,
        cliente,
        clientes,
        salvarCliente,
        novoCliente,
        clienteExcluido,
        clienteSelecionado,
        obterTodos,
    }
}