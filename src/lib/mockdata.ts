// Enhanced Mock Data
export const mockProjects = [
  {
    id: 1,
    title: "AI Knowledge Graph Builder",
    description: "Advanced RAG system with dynamic knowledge graph construction for enterprise AI applications",
    shortDescription: "Enterprise RAG system with knowledge graphs",
    images: [
      "https://picsum.photos/1280/900",
      "https://picsum.photos/1280/900",
      "https://picsum.photos/1280/900",
      "https://picsum.photos/1280/900",
    ],
    tech: ["Python", "Neo4j", "LangChain", "FastAPI", "React", "D3.js"],
    category: "AI/ML",
    client: "TechCorp Solutions",
    duration: "6 months",
    year: "2024",
    featured: true,
    buildProcess: [
      "Research and analysis of existing knowledge management systems",
      "Design of graph database schema and relationships",
      "Implementation of RAG pipeline with vector embeddings",
      "Development of interactive visualization interface",
      "Integration with enterprise systems and APIs",
      "Testing and optimization for production deployment",
    ],
    challenges: "Handling large-scale data ingestion and real-time graph updates",
    results: "40% improvement in information retrieval accuracy",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Multi-Agent AI Assistant",
    description: "Collaborative AI agents system for automated workflow management and decision making",
    shortDescription: "Collaborative AI agents for workflow automation",
    images: [
      "https://picsum.photos/1280/900",
      "https://picsum.photos/1280/900",
      "https://picsum.photos/1280/900",
    ],
    tech: ["Python", "OpenAI", "CrewAI", "Redis", "Docker", "Kubernetes"],
    category: "AI Agents",
    client: "StartupX",
    duration: "4 months",
    year: "2024",
    featured: true,
    buildProcess: [
      "Agent architecture design and role definition",
      "Implementation of inter-agent communication protocols",
      "Development of task delegation and monitoring systems",
      "Integration with external APIs and services",
      "Performance optimization and scaling solutions",
    ],
    challenges: "Coordinating multiple agents and preventing conflicts",
    results: "60% reduction in manual workflow management",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "RAG-Powered Research Assistant",
    description:
      "Intelligent research assistant using retrieval-augmented generation for academic and scientific research",
    shortDescription: "AI research assistant with RAG capabilities",
    images: ["https://picsum.photos/1280/900", "https://picsum.photos/1280/900"],
    tech: ["Python", "Pinecone", "Transformers", "Streamlit", "PostgreSQL"],
    category: "RAG",
    client: "Research Institute",
    duration: "3 months",
    year: "2023",
    featured: false,
    buildProcess: [
      "Document processing and chunking pipeline",
      "Vector embedding generation and storage",
      "RAG model fine-tuning and optimization",
      "User interface development and testing",
    ],
    challenges: "Handling diverse document formats and maintaining context",
    results: "3x faster research paper analysis",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Neural Network Visualizer",
    description: "Interactive 3D visualization tool for understanding deep learning architectures",
    shortDescription: "3D neural network visualization tool",
    images: [
      "https://picsum.photos/1280/900",
      "https://picsum.photos/1280/900",
      "https://picsum.photos/1280/900",
    ],
    tech: ["Three.js", "TensorFlow.js", "React", "WebGL", "D3.js"],
    category: "Visualization",
    client: "Personal Project",
    duration: "2 months",
    year: "2023",
    featured: false,
    buildProcess: [
      "3D rendering engine development",
      "Neural network parsing and analysis",
      "Interactive controls implementation",
      "Performance optimization for large networks",
    ],
    challenges: "Rendering complex networks without performance issues",
    results: "Used by 1000+ students and researchers",
    link: "#",
    github: "#",
  },
]

export const mockBlogPosts = [
  {
    id: 1,
    title: "The Future of AI Agents: Building Autonomous Systems",
    excerpt: "Exploring how AI agents are revolutionizing automation and decision-making in enterprise environments",
    content: `
# The Future of AI Agents: Building Autonomous Systems

AI agents represent the next frontier in artificial intelligence, moving beyond simple chatbots to sophisticated systems capable of autonomous decision-making and task execution.

## What Are AI Agents?

AI agents are autonomous software entities that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional AI systems that respond to direct inputs, agents can:

- **Plan and execute** complex multi-step tasks
- **Learn and adapt** from their experiences
- **Collaborate** with other agents and humans
- **Make decisions** in uncertain environments

## The Architecture of Modern AI Agents

Modern AI agents typically consist of several key components:

### 1. Perception Module
The perception module allows agents to understand their environment through various inputs like text, images, or sensor data.

### 2. Decision Engine
This is where the agent processes information and decides on the best course of action using techniques like reinforcement learning or large language models.

### 3. Action Interface
The action interface enables agents to interact with their environment, whether that's making API calls, controlling robotic systems, or generating responses.

## Real-World Applications

AI agents are already making significant impacts across various industries:

- **Customer Service**: Autonomous agents handling complex customer inquiries
- **Financial Trading**: Agents making split-second trading decisions
- **Healthcare**: Diagnostic agents assisting medical professionals
- **Manufacturing**: Agents optimizing production processes

## Challenges and Considerations

While AI agents offer tremendous potential, they also present unique challenges:

- **Safety and Control**: Ensuring agents behave as intended
- **Transparency**: Understanding agent decision-making processes
- **Ethics**: Addressing bias and fairness in autonomous systems
- **Integration**: Seamlessly incorporating agents into existing workflows

## The Road Ahead

The future of AI agents looks incredibly promising. We're moving toward a world where intelligent agents will be our collaborative partners, handling routine tasks while we focus on creative and strategic work.

As we continue to develop these systems, it's crucial to maintain a balance between autonomy and human oversight, ensuring that AI agents enhance rather than replace human capabilities.
    `,
    date: "2024-01-15",
    readTime: "8 min read",
    image: "https://picsum.photos/1280/900",
    author: "Your Name",
    tags: ["AI Agents", "Automation", "Machine Learning"],
    featured: true,
    views: 1250,
    likes: 89,
    comments: [
      {
        id: 1,
        author: "Alex Chen",
        content: "Great insights on AI agents! I'm particularly interested in the safety considerations you mentioned.",
        date: "2024-01-16",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 2,
        author: "Sarah Johnson",
        content:
          "This is exactly what I needed to understand the current state of AI agents. Thanks for the comprehensive overview!",
        date: "2024-01-17",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  },
  {
    id: 2,
    title: "Building Knowledge Graphs for RAG Systems",
    excerpt: "A deep dive into constructing effective knowledge graphs that enhance retrieval-augmented generation",
    content: `
# Building Knowledge Graphs for RAG Systems

Knowledge graphs are becoming essential components in modern RAG (Retrieval-Augmented Generation) systems, providing structured representations of information that enhance both retrieval accuracy and generation quality.

## Why Knowledge Graphs Matter in RAG

Traditional RAG systems rely on vector similarity for document retrieval, but this approach has limitations:

- **Context Loss**: Vector embeddings may lose important relational information
- **Semantic Gaps**: Similar vectors don't always represent semantically related concepts
- **Limited Reasoning**: Pure vector search struggles with multi-hop reasoning

Knowledge graphs address these challenges by explicitly modeling relationships between entities and concepts.

## Designing Effective Knowledge Graphs

### Entity Extraction and Linking

The first step in building a knowledge graph is identifying and extracting entities from your text corpus:

\`\`\`python
import spacy
from spacy import displacy

nlp = spacy.load("en_core_web_sm")

def extract_entities(text):
    doc = nlp(text)
    entities = [(ent.text, ent.label_) for ent in doc.ents]
    return entities
\`\`\`

### Relationship Modeling

Once entities are identified, the next step is modeling relationships between them:

- **Hierarchical relationships**: Parent-child, category-subcategory
- **Semantic relationships**: Synonyms, antonyms, related concepts
- **Temporal relationships**: Before-after, cause-effect
- **Spatial relationships**: Location-based connections

## Integration with RAG Pipelines

Integrating knowledge graphs with RAG systems involves several key steps:

### 1. Graph-Enhanced Retrieval

Instead of relying solely on vector similarity, use graph traversal to find related information:

\`\`\`python
def graph_enhanced_retrieval(query, graph, embeddings):
    # Find initial nodes based on query
    initial_nodes = find_relevant_nodes(query, graph)
    
    # Expand search using graph relationships
    expanded_nodes = expand_search(initial_nodes, graph, depth=2)
    
    # Combine with vector similarity
    final_results = combine_graph_and_vector_results(
        expanded_nodes, embeddings, query
    )
    
    return final_results
\`\`\`

### 2. Context-Aware Generation

Use graph structure to provide additional context to the generation model:

- Include related entities and their relationships
- Provide hierarchical context for better understanding
- Use graph paths to explain reasoning chains

## Tools and Technologies

Several tools can help you build and manage knowledge graphs:

- **Neo4j**: Popular graph database with excellent query capabilities
- **Amazon Neptune**: Managed graph database service
- **NetworkX**: Python library for graph analysis
- **spaCy**: NLP library with entity recognition capabilities
- **OpenIE**: Open information extraction tools

## Best Practices

When building knowledge graphs for RAG systems:

1. **Start Simple**: Begin with basic entity-relationship models
2. **Iterate and Refine**: Continuously improve based on performance metrics
3. **Validate Quality**: Regularly check graph accuracy and completeness
4. **Optimize Performance**: Balance graph complexity with query speed
5. **Monitor Usage**: Track how graph features impact RAG performance

## Conclusion

Knowledge graphs represent a powerful enhancement to RAG systems, providing structured knowledge that improves both retrieval accuracy and generation quality. While building effective knowledge graphs requires careful planning and iteration, the benefits in terms of system performance and user experience make the investment worthwhile.

As the field continues to evolve, we can expect to see even more sophisticated integration between knowledge graphs and language models, leading to more intelligent and capable AI systems.
    `,
    date: "2024-01-10",
    readTime: "12 min read",
    image: "https://picsum.photos/1280/900",
    author: "Your Name",
    tags: ["Knowledge Graphs", "RAG", "NLP", "Graph Databases"],
    featured: true,
    views: 980,
    likes: 67,
    comments: [
      {
        id: 1,
        author: "Michael Rodriguez",
        content: "Excellent technical deep dive! The code examples really help understand the implementation details.",
        date: "2024-01-11",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  },
  {
    id: 3,
    title: "RAG vs Fine-tuning: When to Use Each Approach",
    excerpt: "Comparing retrieval-augmented generation with fine-tuning for different AI application scenarios",
    content: `
# RAG vs Fine-tuning: When to Use Each Approach

When building AI applications, one of the key decisions is whether to use Retrieval-Augmented Generation (RAG) or fine-tuning. Both approaches have their strengths and are suited for different scenarios.

## Understanding the Approaches

### Retrieval-Augmented Generation (RAG)

RAG combines the power of large language models with external knowledge retrieval:

- **Dynamic Knowledge**: Can access up-to-date information
- **Transparency**: Sources can be traced and verified
- **Flexibility**: Easy to update knowledge base
- **Cost-Effective**: No need to retrain models

### Fine-tuning

Fine-tuning involves training a pre-trained model on domain-specific data:

- **Specialized Performance**: Optimized for specific tasks
- **Consistent Style**: Maintains specific tone and format
- **Offline Operation**: No need for external data sources
- **Customization**: Can learn specific behaviors and patterns

## When to Choose RAG

RAG is ideal when you need:

### 1. Dynamic Information Access
- News and current events
- Frequently updated documentation
- Real-time data integration
- Regulatory compliance information

### 2. Large Knowledge Bases
- Enterprise documentation
- Research databases
- Product catalogs
- Technical manuals

### 3. Transparency and Traceability
- Legal and compliance applications
- Academic research
- Fact-checking systems
- Audit trails

## When to Choose Fine-tuning

Fine-tuning works best for:

### 1. Specialized Domains
- Medical diagnosis
- Legal document analysis
- Financial modeling
- Scientific research

### 2. Consistent Style Requirements
- Brand voice and tone
- Specific writing formats
- Domain-specific terminology
- Cultural adaptations

### 3. Performance-Critical Applications
- Real-time inference
- Edge deployment
- Latency-sensitive systems
- Resource-constrained environments

## Hybrid Approaches

Often, the best solution combines both approaches:

### RAG + Fine-tuned Models
- Fine-tune for domain adaptation
- Use RAG for knowledge retrieval
- Best of both worlds

### Multi-Stage Systems
- Fine-tuned models for initial processing
- RAG for knowledge augmentation
- Ensemble methods for final output

## Implementation Considerations

### RAG Implementation
\`\`\`python
from langchain import VectorStore, LLM
from langchain.chains import RetrievalQA

def setup_rag_system(documents, llm):
    # Create vector store
    vectorstore = VectorStore.from_documents(documents)
    
    # Setup retrieval chain
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=vectorstore.as_retriever()
    )
    
    return qa_chain
\`\`\`

### Fine-tuning Considerations
- Data quality and quantity
- Computational resources
- Training time and costs
- Model evaluation metrics
- Deployment complexity

## Performance Metrics

When evaluating approaches, consider:

### RAG Metrics
- Retrieval accuracy
- Answer relevance
- Source attribution
- Response latency

### Fine-tuning Metrics
- Task-specific accuracy
- Generalization ability
- Inference speed
- Model size

## Cost Analysis

### RAG Costs
- Vector database hosting
- Embedding computation
- Retrieval latency
- Knowledge base maintenance

### Fine-tuning Costs
- Training computation
- Data preparation
- Model storage
- Retraining frequency

## Future Trends

The field is evolving toward:

- **Adaptive RAG**: Systems that learn from retrieval patterns
- **Efficient Fine-tuning**: Parameter-efficient methods like LoRA
- **Hybrid Architectures**: Seamless integration of both approaches
- **Automated Selection**: AI systems that choose the best approach

## Conclusion

The choice between RAG and fine-tuning depends on your specific requirements:

- Choose **RAG** for dynamic, transparent, and flexible knowledge access
- Choose **Fine-tuning** for specialized performance and consistent behavior
- Consider **Hybrid approaches** for complex applications

Understanding these trade-offs will help you build more effective AI systems that meet your specific needs and constraints.
    `,
    date: "2024-01-05",
    readTime: "10 min read",
    image: "https://picsum.photos/1280/900",
    author: "Your Name",
    tags: ["RAG", "Fine-tuning", "LLM", "AI Strategy"],
    featured: false,
    views: 756,
    likes: 45,
    comments: [],
  },
  {
    id: 4,
    title: "Implementing Semantic Search with Vector Databases",
    excerpt: "A practical guide to building semantic search systems using modern vector database technologies",
    content: "Content for semantic search blog post...",
    date: "2023-12-28",
    readTime: "7 min read",
    image: "https://picsum.photos/1280/900",
    author: "Your Name",
    tags: ["Vector Databases", "Semantic Search", "Embeddings"],
    featured: false,
    views: 623,
    likes: 38,
    comments: [],
  },
  {
    id: 5,
    title: "The Evolution of Large Language Models",
    excerpt: "Tracing the development of LLMs from GPT-1 to modern multimodal models",
    content: "Content for LLM evolution blog post...",
    date: "2023-12-20",
    readTime: "15 min read",
    image: "https://picsum.photos/1280/900",
    author: "Your Name",
    tags: ["LLM", "GPT", "AI History", "Deep Learning"],
    featured: false,
    views: 892,
    likes: 72,
    comments: [],
  },
]