import './alert.css'
import { IAlert } from './alerts.list'

export default function Alert({ alert }: { alert: IAlert }) {
  return (
    <div className='alert'>
      <div className='alert__area'>{alert.area}</div>
    </div>
  )
}
