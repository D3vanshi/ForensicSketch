
# Forensic Sketch Recognition System

## Detailed Technical Report

---

# 1. Introduction

The **Forensic Sketch Recognition System** is an AI-assisted investigative platform designed to help law enforcement identify suspects using facial sketches.

Traditional criminal identification systems rely on **photographic databases**, but in many investigations only a **witness sketch** is available. Matching sketches with photographs is extremely difficult due to differences in texture, shading, and style.

To solve this problem, our system integrates:

* **Sketch generation**
* **Facial feature extraction**
* **Hybrid recognition algorithms**

The system consists of **two major modules**:

### Module 1 — Sketch Generation

Allows investigators to construct a suspect sketch using facial components.

### Module 2 — Face Identification

Matches the generated sketch with a gallery of criminal photographs.

The system integrates:

* **React + TypeScript frontend**
* **Node.js backend**
* **Python computer vision engine**

---

# 2. System Architecture

The system follows a **multi-layer architecture**.

### 1️⃣ Frontend Layer

Technology:

* React
* TypeScript
* Fabric.js

Responsibilities:

* Sketch generation interface
* Image upload
* Results visualization

---

### 2️⃣ Backend Layer

Technology:

* Node.js
* Express API

Responsibilities:

* Handle file uploads
* Send image path to Python engine
* Return recognition results

Example API flow:

```
POST /api/upload
POST /api/identify
```

---

### 3️⃣ Recognition Engine

Technology:

* Python
* OpenCV
* dlib
* scikit-image
* scikit-learn

Responsibilities:

* Face detection
* Landmark extraction
* Feature extraction
* Similarity computation

---

### 4️⃣ Gallery Database

Stores:

* Criminal photographs
* Metadata (name, crime, ID)

Used for comparison during recognition.

---

# MODULE 1

# Sketch Generation System

---

## Purpose

Witnesses usually remember **individual facial features**, not the whole face.

Therefore, this module allows investigators to **assemble a face using separate components**.

Users can combine:

* Eyes
* Nose
* Mouth
* Hair
* Face shape
* Eyebrows

---

# Fabric.js Canvas

The canvas acts as the **interactive workspace**.

Example initialization:

```ts
const canvas = new Canvas(canvasRef.current, {
 width: 450,
 height: 500,
 backgroundColor: "#f5f5f5",
 selection: true
});
```

---

# Adding Facial Components

Facial parts are loaded as images and placed onto the canvas.

Example:

```ts
const img = await FabricImage.fromURL(src);

img.set({
 left:200,
 top:200,
 scaleX:0.5,
 scaleY:0.5
});
```

Users can then:

* drag
* resize
* reposition

---

# Layer Control

Objects can overlap.

The system provides:

### Bring Forward

```
canvas.bringObjectForward(obj)
```

### Send Backward

```
canvas.sendObjectBackwards(obj)
```

---

# Deleting Features

Users can remove incorrect components.

```
canvas.remove(obj)
```

---

# Sketch Export

The final sketch is exported as PNG.

```
canvas.toDataURL({ format: "png" })
```

This image becomes the **input for Module 2**.

---

# MODULE 2

# Facial Identification System

---

## Goal

Identify the suspect by matching the sketch against a **gallery of photographs**.

The system returns:

**Top 5 most similar faces.**

---

# Recognition Pipeline

The identification pipeline consists of **five stages**.

---

# 1️⃣ Face Detection

The system first detects the face.

```
detector = dlib.get_frontal_face_detector()
```

This ensures feature extraction occurs only on the facial region.

---

# 2️⃣ Landmark Detection

68 facial landmarks are extracted.

```
predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")
```

Landmarks include:

* eyes
* nose
* lips
* chin
* eyebrows

These coordinates form the basis of geometry features.

---

# 3️⃣ Facial Component Extraction

Individual regions are cropped:

```
Left Eye
Right Eye
Nose
Mouth
```

Example cropping:

```
crop(range(36,42))  # left eye
crop(range(42,48))  # right eye
crop(range(27,36))  # nose
crop(range(48,68))  # mouth
```

---

# 4️⃣ Appearance Feature Extraction (HOG)

Histogram of Oriented Gradients extracts **edge and texture patterns**.

```
hog(img,
 orientations=9,
 pixels_per_cell=(8,8),
 cells_per_block=(2,2))
```

HOG is effective for:

* sketch-to-photo matching
* texture representation
* edge detection

---

# 5️⃣ Geometry Feature Extraction

The system calculates **pose-invariant geometric features**.

These features represent facial proportions.

Example:

```
r1 = eye_distance / nose_mouth_distance
r2 = nose_chin_distance / eye_distance
```

Angles are also calculated:

```
a1 = angle(left_eye, nose, right_eye)
a2 = angle(nose, mouth, chin)
```

These features are **scale independent**.

---

# Hybrid Recognition Strategy

Traditional systems rely only on **appearance matching**.

However sketches differ greatly from photos.

Therefore we introduced a **hybrid scoring method**.

---

### Appearance Score

Computed using cosine similarity.

```
cosine_similarity(hog1, hog2)
```

---

### Geometry Score

Computed using landmark distance.

```
geom = 1 / (1 + norm(geometry_diff))
```

---

# Final Score Formula

```
score = α × appearance + β × geometry
```

Where:

```
α + β = 1
```

---

# Parameter Learning

Instead of manually choosing α and β, the system **learns optimal values**.

Algorithm:

```
for alpha in 0 → 1:
   beta = 1 - alpha
   compute accuracy
```

The best α is selected automatically.

---

# Geometry Weight Learning

Some geometric features are more stable than others.

Weights are computed as:

```
geom_weights = 1 / mean(feature_variance)
```

Stable features receive higher importance.

---

# Identification Process

1️⃣ User uploads sketch
2️⃣ Backend saves image
3️⃣ Python extracts features
4️⃣ Gallery images processed
5️⃣ Similarity scores calculated
6️⃣ Top 5 matches returned

---

# Frontend Identification Interface

The React page handles:

* image upload
* preview
* identification
* results display

Example request:

```
fetch("/api/upload")
fetch("/api/identify")
```

---

# Output Display

The UI shows:

* suspect image
* confidence score
* criminal record
* department
* ID number

Results are ranked:

```
TOP 5 MATCHES
```

---

# Improvements Over Existing Systems

Our system introduces several improvements.

---

### 1️⃣ Hybrid Recognition

Combines:

* HOG appearance features
* Geometry landmark features

Improves accuracy significantly.

---

### 2️⃣ Pose-Invariant Geometry

Landmark ratios remain stable under pose changes.

---

### 3️⃣ Interactive Sketch Builder

Traditional systems require forensic artists.

Our system enables **automatic sketch creation**.

---

### 4️⃣ Automatic Parameter Learning

Weights are learned automatically from training data.

---

### 5️⃣ Modular System Design

Two independent modules:

* sketch generator
* recognition engine

---

# Conclusion

The project successfully integrates:

* sketch generation
* hybrid facial recognition
* modern web interface

Module 1 provides an **intuitive facial composite builder**.

Module 2 introduces a **novel hybrid recognition algorithm combining HOG and pose-invariant geometry features**.

The system demonstrates strong potential for **assisting forensic investigations** and improving suspect identification speed.
