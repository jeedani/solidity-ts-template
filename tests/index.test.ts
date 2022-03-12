import { ethers } from "hardhat"

import { Storage } from "../typechain/Storage"

describe(`Storage Test`, () => {
  let storage: Storage

  beforeAll(async () => {
    const Storage = await ethers.getContractFactory("Storage")
    storage = await Storage.deploy()
    await storage.deployed()
  })


  it("store and retrieve", async () => {
    let response: any
    response = await storage.retrieve()
    expect(response.toString()).toBe('0')
    await storage.store('1')
    response = await storage.retrieve()
    expect(response.toString()).toBe("1")
  })
})
