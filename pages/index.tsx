import { GetServerSideProps } from 'next'

const HomeWrapper = (props: any) => {
  return <h1>Ola mundo</h1>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
     
    }
  }
}

export default HomeWrapper
