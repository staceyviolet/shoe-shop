export function ShowMoreButton({ visible, onClick }) {
    return !visible ? null
                   :
           <div className="text-center">
               <button className="btn btn-outline-primary"
                       onClick={onClick}>
                   Загрузить ещё
               </button>
           </div>
}

