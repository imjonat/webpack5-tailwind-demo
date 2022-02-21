import { http } from '@/utils'

export const demo = async () => {
  await http.post('/demo')
}
