import { Input } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Box } from 'src/components/layout/Box'
import Uploading from 'src/features/sellerprofile/utils/Uploading'
import { mq } from 'src/styles/mediaQueries'
import { Stylesheet } from 'src/styles/types'

export default function MarketForm() {
  type Istore = {
  name: string,
  categ: string,
  desc: string,
  location:string,
  period: string,
  hour: string,
  website: string,
  mainpic: string,
  pic1: string,
  pic2: string,
  pic3: string,
  }
  const [store, setStore] = useState<Istore>({
    name: '',
    categ: '',
    desc: '',
    location: '',
    period: '',
    hour: '',
    website: '',
    mainpic: '',
    pic1: '',
    pic2: '',
    pic3: '',
  })

  useEffect(() => {
    axios
      .get(`http://ec2-3-34-14-143.ap-northeast-2.compute.amazonaws.com:8000/server/store/1`)
      .then((response) => {
        console.log(response)
        setStore(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const onChange = (e: any) => {
    setStore({
      ...store,
      [e.target.name]: e.target.value,
    })
    console.log(store)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(store)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box direction="column" align="center" styles={style.inputContainer}>
        <h2>Add My Market</h2>
        <Uploading opt="mainpic" setForm={setStore}/>
        <Box direction="row" align="center"></Box>
        <Box direction="row" margin="2em 0 0 0">
          <span css={style.inputLabel}>market name</span>
          <Input size="large" name="name" type="text" value={store.name} onChange={onChange} />
        </Box>
        <Box direction="row" margin="2em 0 0 0">
          <span css={style.inputLabel}>category</span>
          <input name="categ" type="text" value={store.categ} onChange={onChange} />
        </Box>
        <Box direction="row" margin="2em 0 0 0">
          <span css={style.inputLabel}>description</span>
          <input name="desc" type="text" value={store.desc} onChange={onChange} />
        </Box>
        <Box direction="row" margin="2em 0 0 0">
          <span css={style.inputLabel}>loaction</span>
          <input name="location" type="text" value={store.location} onChange={onChange} />
        </Box>
        <Box direction="row" margin="2em 0 0 0">
          <span css={style.inputLabel}>open period</span>
          <input name="period" type="text" value={store.period} onChange={onChange} />
        </Box>
        <Box direction="row" margin="2em 0 0 0">
          <span css={style.inputLabel}>open hour</span>
          <input name="hour" type="text" value={store.hour} onChange={onChange} />
        </Box>
        <Box direction="row" margin="2em 0 0 0">
          <span css={style.inputLabel}>website</span>
          <input name="website" type="text" value={store.website} onChange={onChange} />
        </Box>
        <button type="submit">Submit</button>
      </Box>
    </form>
  )
}

const style: Stylesheet = {
  formContent: {
    [mq[480]]: {
      marginLeft: '-1.3em',
    },
  },
  inputContainer: {
    marginTop: '1.5em',
    textAlign: 'right',
  },
  inputLabel: {
    textAlign: 'left',
    width: '6em',
    paddingRight: '1em',
    [mq[480]]: {
      width: '8em',
    },
  },
}
