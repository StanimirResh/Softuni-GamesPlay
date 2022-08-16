import * as request from './requester'


const baseUrl = "http://localhost:3030/data/games"

export const getAll = () => request.get(baseUrl)

export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`)

export const create = (gameData) => request.post(baseUrl, gameData)

export const edit = (gameData) => request.put(`${baseUrl}/${gameData._id}`, gameData)

export const del = (gameId) => request.del(`${baseUrl}/${gameId}`)
