import { createContext, useContext, useState } from 'react'

export type Brownies = {
  total: number
  chocolate: number
  ninho: number
}

type BrowniesContextType = {
  brownies: {
    value: Brownies
    set: React.Dispatch<React.SetStateAction<Brownies>>
  }
}

const BrowniesContext = createContext<BrowniesContextType>(
  {} as BrowniesContextType
)

const BrowniesContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [brownies, setBrownies] = useState<Brownies>({
    chocolate: 1,
    ninho: 1,
    total: 2,
  } as Brownies)

  const values: BrowniesContextType = {
    brownies: {
      value: brownies,
      set: setBrownies,
    },
  }

  return (
    <BrowniesContext.Provider value={values}>
      {children}
    </BrowniesContext.Provider>
  )
}

const useBrowniesContext = () => {
  const context = useContext(BrowniesContext)

  if (context === undefined) {
    throw new Error(
      'Context must be used within a BrowniesContextProvider'
    )
  }

  return context
}

export { BrowniesContextProvider, useBrowniesContext }
