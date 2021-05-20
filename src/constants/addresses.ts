import { FACTORY_ADDRESS as V3_FACTORY_ADDRESS } from '@uniswap/v3-sdk'
import { constructSameAddressMap } from '../utils/constructSameAddressMap'

export const UNI_ADDRESS = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')
export const MULTICALL2_ADDRESSES = constructSameAddressMap('0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696')
export const V2_ROUTER_ADDRESS = constructSameAddressMap('0x19FE682293E00bAea4830E6f61f06293335d7021')
export const GOVERNANCE_ADDRESS = constructSameAddressMap('0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F')
export const TIMELOCK_ADDRESS = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')
export const MERKLE_DISTRIBUTOR_ADDRESS: { [chainId: number]: string } = {
  [1]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}
export const ARGENT_WALLET_DETECTOR_ADDRESS: { [chainId: number]: string } = {
  [1]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}
export const V3_CORE_FACTORY_ADDRESSES = constructSameAddressMap(V3_FACTORY_ADDRESS)
export const QUOTER_ADDRESSES = constructSameAddressMap('0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6')
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES = constructSameAddressMap(
  '0xC36442b4a4522E871399CD717aBDD847Ab11FE88'
)
export const ENS_REGISTRAR_ADDRESSES = {
  [1]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [5]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [4]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [3]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}
export const SOCKS_CONTROLLER_ADDRESSES = {
  [1]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}
export const SWAP_ROUTER_ADDRESSES = constructSameAddressMap('0xE592427A0AEce92De3Edee1F18E0157C05861564')
export const V3_MIGRATOR_ADDRESSES = constructSameAddressMap('0xA5644E29708357803b5A882D272c41cC0dF92B34')
