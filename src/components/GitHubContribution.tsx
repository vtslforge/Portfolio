import { GitHubCalendar } from "react-github-calendar";

const GitHubContribution = () => {
  return (
    <section className="mt-12 w-full border border-amber-50/10 p-4 sm:p-5">
      <div className="flex justify-center overflow-x-auto text-(--color-primary-text)">
        <GitHubCalendar
          username="vtslforge"
          colorScheme="dark"
          blockSize={12}
          blockMargin={3}
          fontSize={10}
          theme={{
            dark: [
              "#202322",
              "#263d32", 
              "#315844", 
              "#477b59", 
              "#a3b86c",
            ],
          }}
          showTotalCount
        />
      </div>
    </section>
  );
};

export default GitHubContribution;
