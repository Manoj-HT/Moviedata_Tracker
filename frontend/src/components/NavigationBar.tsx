import { global } from "../styles/variables"
import { StyleMap } from "../types/types"

const TopNavigation = () => {
  const styles : StyleMap<TopNavigationStyles> = {
    container :{
      height : '3rem',
      boxShadow : global.colors.boxShadow,
    }
  }
  return (
    <div data-component="Navigation Bar" style={styles.container} >TopNavigation</div>
  )
}

export default TopNavigation

type TopNavigationStyles = "container"