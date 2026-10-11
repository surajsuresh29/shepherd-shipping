import 'outstatic/outstatic.css'
import { Outstatic } from 'outstatic'
import OstClientWrapper from './OstClientWrapper'

export default async function Page({
  params
}: {
  params: Promise<{ ost: string[] }>
}) {
  const awaitedParams = await params
  const ostData = await Outstatic()
  return <OstClientWrapper ostData={ostData} params={awaitedParams} />
}
