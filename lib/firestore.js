import { cache } from "react";
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
  limit as limitQuery,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let firestoreInstance;

function getDatabase() {
  if (firestoreInstance) {
    return firestoreInstance;
  }

  if (!firebaseConfig.projectId) {
    console.warn(
      "Firebase project ID missing. Set NEXT_PUBLIC_FIREBASE_* environment variables to enable content fetching."
    );
    return null;
  }

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  firestoreInstance = getFirestore(app);
  return firestoreInstance;
}

const toDate = (value) => {
  if (!value) return null;

  if (value instanceof Date) {
    return value;
  }

  if (typeof value === "string" || typeof value === "number") {
    return new Date(value);
  }

  if (value.seconds) {
    return new Date(value.seconds * 1000);
  }

  return null;
};

const normalizeBlog = (docSnapshot) => {
  const data = docSnapshot.data();

  if (!data) return null;

  const id = data.blog_id || docSnapshot.id;

  return {
    id,
    blog_id: id,
    title: data.blog_title ?? "",
    summary: data.blog_summary ?? "",
    body: data.blog_body ?? "",
    image: data.blog_image ?? "",
    submittedAt: toDate(data.blog_submitted_time),
    visibility: data.blog_visibility ?? false,
  };
};

const normalizeProject = (docSnapshot) => {
  const data = docSnapshot.data();

  if (!data) return null;

  const id = data.project_id || docSnapshot.id;

  return {
    id,
    project_id: id,
    title: data.project_title ?? "",
    description: data.project_description ?? "",
    image: data.project_image ?? "",
    destination: data.project_destination ?? "",
    submittedAt: toDate(data.project_submitted_time),
    visibility: data.project_visibility ?? false,
  };
};

export const fetchVisibleBlogs = cache(async (limit) => {
  const db = getDatabase();

  if (!db) {
    return [];
  }

  try {
    const blogsCol = collection(db, "Blogs");
    const constraints = [
      where("blog_visibility", "==", true),
      orderBy("blog_submitted_time", "desc"),
    ];

    if (typeof limit === "number" && limit > 0) {
      constraints.push(limitQuery(limit));
    }

    const blogsQuery = query(blogsCol, ...constraints);
    const snapshot = await getDocs(blogsQuery);

    return snapshot.docs
      .map(normalizeBlog)
      .filter((blog) => blog && blog.visibility);
  } catch (error) {
    if (error?.code === "failed-precondition") {
      console.warn(
        "Firestore composite index missing for blogs query. Falling back to unordered fetch."
      );
      try {
        const blogsCol = collection(db, "blogs");
        const snapshot = await getDocs(
          query(blogsCol, where("blog_visibility", "==", true))
        );

        return snapshot.docs
          .map(normalizeBlog)
          .filter((blog) => blog && blog.visibility);
      } catch (fallbackError) {
        console.error("Fallback blog fetch failed", fallbackError);
      }
    } else {
      console.error("Failed to fetch blogs from Firestore", error);
    }
    return [];
  }
});

export const fetchBlogById = cache(async (blogId) => {
  if (!blogId) return null;

  const db = getDatabase();

  if (!db) {
    return null;
  }

  try {
    const docRef = doc(db, "Blogs", blogId);
    const snapshot = await getDoc(docRef);
    const blog = normalizeBlog(snapshot);

    if (!blog?.visibility) {
      return null;
    }

    return blog;
  } catch (error) {
    console.error(`Failed to fetch blog ${blogId}`, error);
    return null;
  }
});

export const fetchVisibleProjects = cache(async (limit) => {
  const db = getDatabase();

  if (!db) {
    return [];
  }

  try {
    const projectsCol = collection(db, "Projects");
    const constraints = [
      where("project_visibility", "==", true),
      orderBy("project_submitted_time", "desc"),
    ];

    if (typeof limit === "number" && limit > 0) {
      constraints.push(limitQuery(limit));
    }

    const projectsQuery = query(projectsCol, ...constraints);
    const snapshot = await getDocs(projectsQuery);

    return snapshot.docs
      .map(normalizeProject)
      .filter((project) => project && project.visibility);
  } catch (error) {
    if (error?.code === "failed-precondition") {
      console.warn(
        "Firestore composite index missing for projects query. Falling back to unordered fetch."
      );
      try {
        const projectsCol = collection(db, "projects");
        const snapshot = await getDocs(
          query(projectsCol, where("project_visibility", "==", true))
        );

        return snapshot.docs
          .map(normalizeProject)
          .filter((project) => project && project.visibility);
      } catch (fallbackError) {
        console.error("Fallback project fetch failed", fallbackError);
      }
    } else {
      console.error("Failed to fetch projects from Firestore", error);
    }
    return [];
  }
});

export const fetchProjectById = cache(async (projectId) => {
  if (!projectId) return null;

  const db = getDatabase();

  if (!db) {
    return null;
  }

  try {
    const docRef = doc(db, "projects", projectId);
    const snapshot = await getDoc(docRef);
    const project = normalizeProject(snapshot);

    if (!project?.visibility) {
      return null;
    }

    return project;
  } catch (error) {
    console.error(`Failed to fetch project ${projectId}`, error);
    return null;
  }
});

export const firestore = getDatabase();

