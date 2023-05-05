
import {AiOutlineWarning} from "react-icons/ai"
interface ELProps {
  message: string
}

const ErrorLabel: React.FC<ELProps> = ({ message }) => {
  return (
    <div className="flex items-center gap-2">
      <AiOutlineWarning />
      <p className="font-raj text-red-600">{message}</p>
    </div>
  )
}

export default ErrorLabel;