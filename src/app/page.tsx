import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center ">
      <div className="mx-auto">
        <h1 className="text-lg font-medium">
          Created by{' '}
          <Link
            className="text-green-600 hover:text-green-800 hover:underline transition-colors"
            href="https://pauloclemente.dev"
          >
            Paulo Clemente
          </Link>{' '}
          👋
        </h1>
      </div>
    </main>
  )
}
