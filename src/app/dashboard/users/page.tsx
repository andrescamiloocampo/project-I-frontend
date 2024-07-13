import { type ReactElement } from "react";
import { auth } from "../../../../auth";
import styles from './users.module.css';

export default async function UsersPage():Promise<ReactElement> {
    const session = await auth();
    return(
        <div className={styles.users}>
            <h1>Users</h1>
            <pre>{JSON.stringify(session?.user)}</pre>
        </div>
    )
}