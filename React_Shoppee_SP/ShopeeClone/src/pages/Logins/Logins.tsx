import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getRules } from 'src/utils/rules'

interface FormSate {
  email: string
  password: string
  confirm_password: string
}

export default function Logins() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormSate>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form action='' className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng Nhập</div>
              <div className='mt-8'>
                <input
                  type='text'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Email'
                  {...register('email', rules.email)}
                />
                <div className='mt-1 text-red-600 min-h-4 text-sm'></div>
              </div>

              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Password'
                />
                <div className='mt-1 text-red-600 min-h-4 text-sm'></div>
              </div>
              <div className='mt-3'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                  Đăng Nhập
                </button>
              </div>
              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center'>
                  <span className='text-slate-400'>Bạn chưa có tài khoản ?</span>
                  <Link to='/register' className='text-red-400'>
                    Đăng Ký
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
