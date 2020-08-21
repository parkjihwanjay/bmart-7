import React,{useState, useRef, useEffect} from 'react'
import './style.scss'

interface IProps {
  mainCategoryList : []
}

export const CategoryPreviewHeader: React.FC<IProps> = (props) => {
  const {mainCategoryList} = props

  const [isSticky, setSticky] = useState(false);
  const [categoryId, setCategoryId] = useState(16)

  const ref = useRef(null)

  let timeout

  const handleScroll = () => {
    if(timeout){
      window.cancelAnimationFrame(timeout)
    }
    timeout = window.requestAnimationFrame(function () {
      if (ref.current) {
        setSticky(ref.current.getBoundingClientRect().top <= 0);
      }
    });
    
  };
  
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  

  return (
    <div className={`category-header ${isSticky ? ' sticky' : ''}`} ref={ref}>
      {mainCategoryList.map((category, idx) => {
      const {title, id} = category
      return id===categoryId ? <a className="active" data-category={id} href={`#catgory-${id}`} key={id} onClick={(e) => {setCategoryId(id)}}> {title}</a> : <a href={`#catgory-${id}`} key={id} onClick={(e) => {setCategoryId(id)}}>{title}</a>
      })}
    </div>
  )
}