import { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardTitle, CardBody, Spinner, CardText } from "reactstrap";
import getMethod from "../../customhooks/useapi";


interface IProps {
  searchValue: string | undefined,
}

export interface IsearchMarketCurreny {
  symbol: string,
  high: string,
  low: string,
  volume: string,
  percentChange: string,
  quoteVolume: string,
  updatedAt: string,
  code?: string
}

interface IGetMethodRes {
  res?: any,
  isLoading: boolean,
  isError: boolean
}

export function MarketCurrency(props: IProps) {
  const { searchValue } = props
  const [searchMarketCurrecy, setSearchMarketCurreny] = useState<IsearchMarketCurreny>()
  const [marketCurrencies, setMarketCurrencies] = useState<IsearchMarketCurreny[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    getMethod("http://localhost:3001/getallmarketssummaries").then(({ res, isLoading, isError }: IGetMethodRes) => {
      setMarketCurrencies(res)
      setIsLoading(isLoading)
      setIsError(isError)
    })
  }, [])

  useEffect(() => {
    if (searchValue) {
      fetch(`http://localhost:3001/getmarketsummary/${searchValue}`).then(res => res.json()).then(data => setSearchMarketCurreny(data))
    }
  }, [searchValue])

  const marketDetails = (marketDetail: IsearchMarketCurreny, i: number = 1) => {
    const { symbol } = marketDetail
    return (
      <Col xs="12" md="4" key={i}>
        <Card body className="my-2">
          <CardTitle tag="h5">
            {symbol}
          </CardTitle>
          <CardBody>
            {
              Object.keys(marketDetail).map((keyVal: string, i: number) => {
                return (keyVal !== "symbol" && <CardText className="m-0" key={i}>{keyVal} : {marketDetail[keyVal as keyof IsearchMarketCurreny]}</CardText>)
              })
            }
          </CardBody>
        </Card>
      </ Col>
    )
  }

  return (
    <>
      <Container className="mb-5">
        {!searchValue ?
          <>
            <Row className="align-items-center">
              {
                marketCurrencies?.length ?
                  marketCurrencies.map((mData: IsearchMarketCurreny, i: number) => {
                    return (
                      marketDetails(mData, i)
                    )
                  }) : !isLoading && !isError && <Row className="align-items-center">
                    <Col className="text-center fw-bold m-2">0 Result</Col>
                  </Row>
              }
            </Row>
          </>
          :
          <Row className="align-items-center">
            {
              searchMarketCurrecy && (searchMarketCurrecy?.code === 'MARKET_DOES_NOT_EXIST' ? <Col className="text-center m-2 fw-bold">{searchMarketCurrecy?.code}</Col> : marketDetails(searchMarketCurrecy))
            }
          </Row>
        }
        {isLoading && <div className="d-flex align-items-center" style={{ height: "90vh" }}>
          <div className="m-auto" style={{ width: "10%" }}>
            <Spinner color="dark" type="grow">Loading...</Spinner>
          </div>
        </div>}
        {!searchValue && isError && <Row className="align-items-center">
          <Col className="text-center fw-bold m-2">Something went Wrong</Col>
        </Row>}
      </Container>
    </>
  )
}