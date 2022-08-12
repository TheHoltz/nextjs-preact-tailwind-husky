import { GetServerSideProps } from 'next'

const HomeWrapper = (props: any) => {
  return <>
    <h1 className="text-3xl">Ola mundo</h1>
  </>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {

    }
  }
}

export default HomeWrapper
