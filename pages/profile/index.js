import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import PrivateRoutes from "../../components/common/privateRoutes"
import PageWrapper from "../../components/layout/PageWrapper"
import styles from "../../styles/Profile.module.css"

export default function Profile() {
  const router = useRouter()
  const state = useSelector((state) => state)

  const { user } = state.accounts

  return (
    <PrivateRoutes>
      <PageWrapper key={router.route}>
        <div className="contained">
          <div className={styles.profileHeader}>
            <div className={styles.greeting}>Hi, {user?.first_name}</div>
            <div className={styles.editBtn}>edit</div>
          </div>
          <div className={styles.profileLinks}>
            <div className={styles.profileLink}>
              <Link href="/profile/orders">Orders</Link>
            </div>
            <div className={styles.profileLink}>
              <Link href="/profile/addresses">Addresses</Link>
            </div>
          </div>
        </div>
      </PageWrapper>
    </PrivateRoutes>
  )
}
