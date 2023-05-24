import { Button, Result } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div className="grid content-center h-screen">
      <Result
        status="404"
        title="404"
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            {t('common.back_home')}
          </Button>
        }
      />
    </div>
  )
}

export default NotFoundPage
