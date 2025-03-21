import React from 'react'
import styles from '../styles/ShopNameItem.module.css'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GiRecycle } from 'react-icons/gi';
import { MdAddCircleOutline } from 'react-icons/md';
import Link from 'next/link'


const ShopNameItem = ({name, icon, id, deleteListItem, toggleItemAsCompleted}) => {
  return (
    <div className={styles.shopItemContainer}>
        <div className={styles.background}>
                <img src='/user_avatar_1.svg' alt="user avatar icon" width={55} />
        </div>
        <div className={styles.shopNameItem} >
            <div className={styles.cardTop}></div>
            <Link href="/ShoppingList">
                    <a>
            <div className={styles.cardText}>
                    <p>
                        Terry's
                    </p> 
                    <div className={styles.shopName}>
                        {name} 
                    </div>
                    <p>
                        list
                    </p>
            </div>
            </a>
            </Link>
            <div className={styles.icons}>
                    <div className={styles.iconLeft}>
                    </div>
                    
                    
                    <div className={styles.iconRight}>
                        <div className={styles.edit}>
                        <FaRegEdit />
                        </div>
                        <div className={styles.delete} onClick={() => {
                        deleteListItem(id)
                        }}>
                        <RiDeleteBin6Line />
                        </div>
                    </div>
           
            </div>

            
                    
                    
            </div>
            <div className={styles.avatarsNotification}>
                  <div className={styles.avatarBox1}>
                      <div className={styles.notification1}>1</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg' width={20}  />
                      
                  </div>
                  <div className={styles.avatarBox2}>
                      <div className={styles.notification2}>2</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
                  </div>
                  <div className={styles.avatarBox3}>
                      <div className={styles.notification3}>4</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
                  </div>
                  <div className={styles.avatarBox4}>
                      <div className={styles.notification4}>2</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
                  </div>
                </div>
        </div>
  )
}
export default ShopNameItem

